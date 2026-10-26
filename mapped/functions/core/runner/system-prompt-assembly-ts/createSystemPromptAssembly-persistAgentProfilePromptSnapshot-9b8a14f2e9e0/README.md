# `createSystemPromptAssembly/persistAgentProfilePromptSnapshot`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552755-552758](../../../../../../reference/runtime/sand-eval-runner.cjs#L552755-L552758) | `FunctionDeclaration` | não | `store, snapshot` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552755-552758](../../../../../../reference/runtime/sand-eval-runner.cjs#L552755-L552758) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:552755

Chamadas escritas diretamente neste corpo: `store.setAgentProfilePromptSnapshot`.

Alvos de atribuição ou incremento: `inMemoryProfilePromptSnapshot`.

SHA-256 do trecho: `9fb544e0a40dddbf8bc1b5daad24c76a74c4fd6e4ae1bdc184153162b7c81d91`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
