import { describe, expect, test } from 'bun:test';
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(import.meta.dir, '..');
const read = (file: string) => fs.readFileSync(path.join(ROOT, file), 'utf-8');

describe('external web skills', () => {
  test('Agent Reach diagnoses the live backend and stays read-only by default', () => {
    const skill = read('agent-reach/SKILL.md.tmpl');
    expect(skill).toContain('agent-reach doctor --json');
    expect(skill).toContain('active_backend');
    expect(skill).toContain('requires explicit authorization');
    expect(skill).toContain('Panniantong/Agent-Reach');
  });

  test('Scrapling escalation is ordered and every CLI extraction is AI-targeted', () => {
    const skill = read('scrapling/SKILL.md.tmpl');
    const commands = skill.split('\n').filter(line => line.startsWith('scrapling extract '));
    expect(commands.length).toBe(3);
    expect(commands.every(line => line.includes('--ai-targeted'))).toBe(true);
    expect(commands.map(line => line.split(' ')[2])).toEqual(['get', 'fetch', 'stealthy-fetch']);
    expect(skill).toContain('robots_txt_obey = True');
    expect(skill).toContain('D4Vinci/Scrapling');
  });

  test('the gstack router exposes both additions', () => {
    const router = read('SKILL.md.tmpl');
    expect(router).toContain('invoke `/agent-reach`');
    expect(router).toContain('invoke `/scrapling`');
  });
});
