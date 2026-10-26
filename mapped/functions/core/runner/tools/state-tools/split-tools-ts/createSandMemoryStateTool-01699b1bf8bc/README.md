# `createSandMemoryStateTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/split-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771713-771736](../../../../../../../../reference/runtime/host-main.cjs#L771713-L771736) | `FunctionDeclaration` | não | `deps, {   vaultContacts = false,   memoryTypes = enabledMemoryTypes() } = {}` |
| [evaluation:570946-570969](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570946-L570969) | `FunctionDeclaration` | não | `deps, {   vaultContacts = false,   memoryTypes = enabledMemoryTypes() } = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771713-771736](../../../../../../../../reference/runtime/host-main.cjs#L771713-L771736) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:570946-570969](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570946-L570969) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:771713

Chamadas escritas diretamente neste corpo: `Object.assign`, `defineCommunicateTool`, `isTeamBot`, `memoryDescription`, `memoryParameters`.

SHA-256 do trecho: `1f85e2a5b4b3bb9538d2e60e873463c710a5dc2e102ad2e731e8f0506c668c0e`.

### evaluation:570946

Chamadas escritas diretamente neste corpo: `Object.assign`, `defineCommunicateTool`, `isTeamBot`, `memoryDescription`, `memoryParameters`.

SHA-256 do trecho: `1f85e2a5b4b3bb9538d2e60e873463c710a5dc2e102ad2e731e8f0506c668c0e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
