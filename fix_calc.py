import re

with open('src/routes/calculator.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# I need to fix the broken button code.
# The broken code looks like:
# navigator.clipboard.writeText(Estimate:  -  JOD);
# setCopied(true);
# setTimeout(() => setCopied(false), 2000);
# }}
# className={mt-10 w-full border py-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 }
# >
# {copied ? "[ ESTIMATE COPIED ✓ ]" : "Copy Estimate"}
# </button>

# Let's just find everything from <button down to </button> in the Results panel.
pattern = r'<button\s*onClick=\{.*?\}\s*className=\{.*?\s*>\s*\{copied \? "\[ ESTIMATE COPIED ✓ \]" : "Copy Estimate"\}\s*</button>'

correct_button = """<button 
                onClick={() => {
                  navigator.clipboard.writeText(`Estimate: ${min} - ${max} JOD`);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className={`mt-10 w-full border py-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 ${
                  copied 
                    ? "border-green-500 bg-green-500/10 text-green-500 shadow-[0_0_20px_rgba(34,197,94,0.2)]" 
                    : "border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground"
                }`}
              >
                {copied ? "[ ESTIMATE COPIED ✓ ]" : "Copy Estimate"}
              </button>"""

content = re.sub(pattern, correct_button, content, flags=re.DOTALL)

with open('src/routes/calculator.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
