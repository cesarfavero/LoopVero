# `fenceBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/markdown-notification-text.ts` · [README do módulo](../../../../../modules/shared/media/markdown-notification-text-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722289-722293](../../../../../../reference/runtime/host-main.cjs#L722289-L722293) | `FunctionDeclaration` | não | `block` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722289-722293](../../../../../../reference/runtime/host-main.cjs#L722289-L722293) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:722289

Chamadas escritas diretamente neste corpo: `.slice`, `FENCE_CLOSE_PATTERN.test`, `block.split`, `lines2.at`, `lines2.join`, `lines2.pop`.

SHA-256 do trecho: `ec9956e5247c47a36ce97cdaf08832dc7e42ffaa5bcda84c6c03a067e6da1892`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
