# `cacheBlobReads/setBlobLocallyOnly`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-recovery.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-recovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720047-720050](../../../../../../../reference/runtime/host-main.cjs#L720047-L720050) | `FunctionExpression` | não | `ctx, blobId, blobData` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720047-720050](../../../../../../../reference/runtime/host-main.cjs#L720047-L720050) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:720047

Chamadas escritas diretamente neste corpo: `Promise.resolve`, `blobStore.setBlobLocallyOnly`, `reads.set`, `toHex3`.

SHA-256 do trecho: `e674eb214ca06338e071544270d93c7dc1ab4f3090656111e31bfebbd983de1a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
