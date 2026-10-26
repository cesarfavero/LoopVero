# `emailSubaddressBase`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/email/email-subaddress.ts` · [README do módulo](../../../../../modules/core/email/email-subaddress-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715954-715961](../../../../../../reference/runtime/host-main.cjs#L715954-L715961) | `FunctionDeclaration` | não | `address` |
| [evaluation:527623-527630](../../../../../../reference/runtime/sand-eval-runner.cjs#L527623-L527630) | `FunctionDeclaration` | não | `address` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715954-715961](../../../../../../reference/runtime/host-main.cjs#L715954-L715961) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:527623-527630](../../../../../../reference/runtime/sand-eval-runner.cjs#L527623-L527630) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:715954

Chamadas escritas diretamente neste corpo: `address.indexOf`, `address.lastIndexOf`, `address.slice`.

SHA-256 do trecho: `87df69e31465ac51ebffb5dcc3489c176c058d3528dfaa0f9eccd313aca1fb0a`.

### evaluation:527623

Chamadas escritas diretamente neste corpo: `address.indexOf`, `address.lastIndexOf`, `address.slice`.

SHA-256 do trecho: `87df69e31465ac51ebffb5dcc3489c176c058d3528dfaa0f9eccd313aca1fb0a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
