# `hasErrorCode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/forever-box/disk-pressure.ts` · [README do módulo](../../../../../../modules/host/extensions/forever-box/disk-pressure-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:679790-679792](../../../../../../../reference/runtime/host-main.cjs#L679790-L679792) | `FunctionDeclaration` | não | `error64, code` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679790-679792](../../../../../../../reference/runtime/host-main.cjs#L679790-L679792) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:679790

Chamadas escritas diretamente neste corpo: `isUnknownRecord2`.

SHA-256 do trecho: `77b2cbe882f91ea64d29c83f028b165826baa528565bca9a0aa9d549390c6a61`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
