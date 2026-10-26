# `tooLargeAttachmentMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760619-760623](../../../../../../../reference/runtime/host-main.cjs#L760619-L760623) | `FunctionDeclaration` | não | `sourcePath2, limitBytes` |
| [evaluation:551434-551438](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551434-L551438) | `FunctionDeclaration` | não | `sourcePath2, limitBytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760619-760623](../../../../../../../reference/runtime/host-main.cjs#L760619-L760623) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551434-551438](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551434-L551438) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:760619

Chamadas escritas diretamente neste corpo: `Math.floor`.

SHA-256 do trecho: `332dc7852d1baeed4d3679cd530d98e200eac9d660a69a07b64719dd51535d5e`.

### evaluation:551434

Chamadas escritas diretamente neste corpo: `Math.floor`.

SHA-256 do trecho: `838118c2bff0ac6a15ea61b34809993f1129bd6c4f18b893601810e9c13352ef`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
