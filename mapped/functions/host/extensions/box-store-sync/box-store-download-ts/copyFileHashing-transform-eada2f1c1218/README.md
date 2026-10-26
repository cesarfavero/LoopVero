# `copyFileHashing/transform`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:478370-478379](../../../../../../../reference/runtime/host-main.cjs#L478370-L478379) | `FunctionExpression` | não | `chunk, _encoding, callback` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478370-478379](../../../../../../../reference/runtime/host-main.cjs#L478370-L478379) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:478370

Chamadas escritas diretamente neste corpo: `.then`, `Buffer.from`, `Buffer.isBuffer`, `callback`, `hash2.update`, `onChunk`.

Alvos de atribuição ou incremento: `size`.

SHA-256 do trecho: `fd1c33e5b6e40ebe56b02147d27ca907b5656668563562df3026fde180eedc56`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
