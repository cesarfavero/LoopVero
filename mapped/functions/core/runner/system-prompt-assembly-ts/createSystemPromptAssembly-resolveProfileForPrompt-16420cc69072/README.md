# `createSystemPromptAssembly/resolveProfileForPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552700-552714](../../../../../../reference/runtime/sand-eval-runner.cjs#L552700-L552714) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552700-552714](../../../../../../reference/runtime/sand-eval-runner.cjs#L552700-L552714) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:552700

Chamadas escritas diretamente neste corpo: `agentStore.getMetadata`, `deps.agentProfileProvider`, `deps.agentStore`, `provider`.

SHA-256 do trecho: `fee2e0f03c7626f2c1e2cacfa77b87dfe9aa67905ac7455639f8ce39b178d4db`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
