# `parseProcStatIdentity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/chrome-discovery.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/chrome-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705318-705333](../../../../../../../reference/runtime/host-main.cjs#L705318-L705333) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705318-705333](../../../../../../../reference/runtime/host-main.cjs#L705318-L705333) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:705318

Chamadas escritas diretamente neste corpo: `.split`, `.trim`, `/^\d+$/.test`, `BigInt`, `raw.indexOf`, `raw.lastIndexOf`, `raw.slice`.

SHA-256 do trecho: `54df9210b3084a016466dbb1b09ccabbda38ce5a75fc93f69d1330ad9489f031`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
