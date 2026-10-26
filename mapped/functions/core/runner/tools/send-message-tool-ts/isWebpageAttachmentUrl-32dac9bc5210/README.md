# `isWebpageAttachmentUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760676-760682](../../../../../../../reference/runtime/host-main.cjs#L760676-L760682) | `FunctionDeclaration` | não | `url2` |
| [evaluation:551491-551497](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551491-L551497) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760676-760682](../../../../../../../reference/runtime/host-main.cjs#L760676-L760682) | 0 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:551491-551497](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551491-L551497) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:760676

Chamadas escritas diretamente neste corpo: `classifyAttachment`, `new URL`.

SHA-256 do trecho: `5fe432d88c3209330258a37e19c8adc759910a8886e736ded541d33c0282401b`.

### evaluation:551491

Chamadas escritas diretamente neste corpo: `classifyAttachment`, `new URL`.

SHA-256 do trecho: `5fe432d88c3209330258a37e19c8adc759910a8886e736ded541d33c0282401b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
