import sys

with open('src/routes/index.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

start_skills = content.find('const SKILLS = [')
end_projects = content.find('function Index() {')

if start_skills != -1 and end_projects != -1:
    content = content[:start_skills] + content[end_projects:]

old_func_start = '''function Index() {
  const [visibleCount, setVisibleCount] = useState(5);'''

new_func_start = '''function Index() {
  const [projectsData, setProjectsData] = useState(() => getProjects());
  const [visibleCount, setVisibleCount] = useState(5);
  const MARQUEE_ITEMS = [...SKILLS, ...SKILLS];'''

content = content.replace(old_func_start, new_func_start)

with open('src/routes/index.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
