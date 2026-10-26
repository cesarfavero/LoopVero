# `parseChannelAddress`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/channel-address.ts` · [README do módulo](../../../../../modules/shared/channels/channel-address-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505225-505233](../../../../../../reference/runtime/host-main.cjs#L505225-L505233) | `FunctionDeclaration` | não | `raw` |
| [evaluation:474457-474465](../../../../../../reference/runtime/sand-eval-runner.cjs#L474457-L474465) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505225-505233](../../../../../../reference/runtime/host-main.cjs#L505225-L505233) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:474457-474465](../../../../../../reference/runtime/sand-eval-runner.cjs#L474457-L474465) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:505225

Chamadas escritas diretamente neste corpo: `.trim`, `raw.trim`, `trimmed.indexOf`, `trimmed.slice`.

SHA-256 do trecho: `04ea0717e7e7692792da3a0239654ce9503e7de35bc6b7c0d107dc0a5378abb6`.

### evaluation:474457

Chamadas escritas diretamente neste corpo: `.trim`, `raw.trim`, `trimmed.indexOf`, `trimmed.slice`.

SHA-256 do trecho: `b2b6b5092377e22244a82cca8c7ede3401abee7cd8f4aa14ff5b1962594eb808`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
