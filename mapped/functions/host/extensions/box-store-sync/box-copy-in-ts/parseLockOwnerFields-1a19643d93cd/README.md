# `parseLockOwnerFields`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-copy-in.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:483796-483811](../../../../../../../reference/runtime/host-main.cjs#L483796-L483811) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483796-483811](../../../../../../../reference/runtime/host-main.cjs#L483796-L483811) | 4 | 0 | 0 | 2 | 0 | 1 |

### host:483796

Chamadas escritas diretamente neste corpo: `JSON.parse`, `Symbol`.

Alvos de atribuição ou incremento: `fields3.sid`, `fields3.uid`, `fields3.windowId`, `parsed2`.

SHA-256 do trecho: `0ec90bd58fece9db26e647954cb0cc83bc006c1092b99562af87f3b4570af45c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
