# `createSystemPromptAssembly/readLeanExecutorFacts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:553630-553641](../../../../../../reference/runtime/sand-eval-runner.cjs#L553630-L553641) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553630-553641](../../../../../../reference/runtime/sand-eval-runner.cjs#L553630-L553641) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:553630

Chamadas escritas diretamente neste corpo: `deps.gates.agentEmailDrafts`, `lean.emailMounted`, `lean.holdsCloudAgent`, `lean.holdsMachineTools`, `lean.recallStoreMounted`, `sandExecutorLeanToolFacts`, `sandWebToolOffers`.

SHA-256 do trecho: `8250b037577f5e5b34a5ac2ada690c0401e2a74ce6891f700395bc769538ef4b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
