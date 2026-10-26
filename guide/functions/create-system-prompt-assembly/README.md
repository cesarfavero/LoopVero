# `createSystemPromptAssembly`

[Componente: prompts](../../components/prompts/README.md) · [Índice](../../README.md)

**Fonte primária:** [sand-eval-runner.cjs:552679-553779](../../../reference/runtime/sand-eval-runner.cjs#L552679-L553779). Análise estática do snapshot original; nomes preservados do bundle.

## Contrato

`createSystemPromptAssembly(deps)` devolve funções de renderização e controle de snapshots. A closure mantém snapshot de perfil em memória, hashes das seções, prefixos estáticos recentes e estado da memória renderizada. Não há um prompt final único independente de `deps`.

## Composição

Resolve decisões de ferramentas e distingue main de subagente. O base prompt pode ser lean executor, override completo, base override ou a variante normal/automação mediada. `renderSections` monta um `Map` ordenado com perfil, identidade, fuso, memória, sessões, rotinas, tasks, skills, canais, diretório, regras de envio, MCP e box/computador.

## Snapshots e atualizações

Perfil e seções congeladas são indexados por `compactionEpoch`. Uma alteração de perfil pode ser anunciada antes de substituir o prefixo. `persistAnnouncedAgentProfile` confere que o snapshot ainda corresponde à época e identidade esperadas. A memória pode renderizar política no system e fatos em user-info; pendência de resolução e retenção são estados explícitos.

## Saída

O objeto expõe `getSystemPrompt`, `createSystemPromptGeneratorForRun`, acesso a hashes, contexto de memória, updates de seções e preparação/persistência de perfil. `renderSystemPrompt` calcula SHA-256 por seção e guarda prefixos para observação.

## Fronteira

Preservar um prefixo pode favorecer cache, mas o benefício precisa de métricas do provider. O snapshot não congela todas as ferramentas nem garante que um dado de produção já foi carregado. Esta função depende de stores e providers injetados.
