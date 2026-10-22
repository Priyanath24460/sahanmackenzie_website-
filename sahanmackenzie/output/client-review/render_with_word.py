"""Use the packaged renderer with installed Word as the Windows PDF converter."""
from pathlib import Path
import importlib.util
import subprocess
import os

skill = Path('C:/Users/Asus/.codex/plugins/cache/openai-primary-runtime/documents/26.1017.22135/skills/documents')
poppler = Path('C:/Users/Asus/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/poppler/Library/bin')
os.environ['PATH'] = str(poppler) + os.pathsep + os.environ.get('PATH', '')
spec = importlib.util.spec_from_file_location('packaged_docx_renderer', skill / 'render_docx.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

def convert_to_pdf(input_path, user_profile, output_dir, stem, verbose=False):
    output = Path(output_dir) / (stem + '.pdf')
    command = ['powershell.exe', '-NoProfile', '-NonInteractive', '-File', str(Path(__file__).with_name('export_word.ps1')),
               '-InputPath', str(Path(input_path).resolve()), '-OutputPath', str(output.resolve())]
    result = subprocess.run(command, capture_output=True, text=True, timeout=90)
    log = result.stdout + result.stderr
    if result.returncode or not output.exists():
        raise RuntimeError('Native Word conversion failed\n' + log)
    return str(output), log

module.convert_to_pdf = convert_to_pdf
module.main()
