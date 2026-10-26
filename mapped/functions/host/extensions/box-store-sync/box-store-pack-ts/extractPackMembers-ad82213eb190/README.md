# `extractPackMembers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-pack.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-pack-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:478565-478616](../../../../../../../reference/runtime/host-main.cjs#L478565-L478616) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478565-478616](../../../../../../../reference/runtime/host-main.cjs#L478565-L478616) | 0 | 1 | 3 | 1 | 0 | 0 |

### host:478565

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `handle.close`, `settleAllThenThrowFirst`, `workers.push`.

Alvos de atribuição ou incremento: `w2`.

SHA-256 do trecho: `4ab6ddb1c69967c4db8bf8687ebd6c39696f9a5fb6e4336160a959787cae9c3f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
