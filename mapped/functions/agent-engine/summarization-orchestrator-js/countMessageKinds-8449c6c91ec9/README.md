# `countMessageKinds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-engine/summarization-orchestrator.js` · [README do módulo](../../../../modules/agent-engine/summarization-orchestrator-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:649497-649537](../../../../../reference/runtime/host-main.cjs#L649497-L649537) | `FunctionDeclaration` | não | `messages2` |
| [evaluation:441150-441190](../../../../../reference/runtime/sand-eval-runner.cjs#L441150-L441190) | `FunctionDeclaration` | não | `messages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649497-649537](../../../../../reference/runtime/host-main.cjs#L649497-L649537) | 7 | 2 | 0 | 1 | 1 | 0 |
| [evaluation:441150-441190](../../../../../reference/runtime/sand-eval-runner.cjs#L441150-L441190) | 7 | 2 | 0 | 1 | 1 | 0 |

### host:649497

Chamadas escritas diretamente neste corpo: `Array.isArray`, `String`, `new Error`.

Alvos de atribuição ou incremento: `assistantMessages`, `systemMessages`, `toolCalls2`, `toolMessages`, `userMessages`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `824a6464f094359d161583a766cda16c3fe3c40ed19005ed8c29413d81becb40`.

### evaluation:441150

Chamadas escritas diretamente neste corpo: `Array.isArray`, `String`, `new Error`.

Alvos de atribuição ou incremento: `assistantMessages`, `systemMessages`, `toolCalls3`, `toolMessages`, `userMessages`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `bc3df1d7b3cfc5fc2ad70b664b65186d24342f1aff732520595b64a3149a5356`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
