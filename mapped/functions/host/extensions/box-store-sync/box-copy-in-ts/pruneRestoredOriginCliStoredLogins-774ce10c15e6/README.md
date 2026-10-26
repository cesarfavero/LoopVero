# `pruneRestoredOriginCliStoredLogins`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-copy-in.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:482905-482951](../../../../../../../reference/runtime/host-main.cjs#L482905-L482951) | `FunctionDeclaration` | sim | `targetDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482905-482951](../../../../../../../reference/runtime/host-main.cjs#L482905-L482951) | 2 | 1 | 4 | 1 | 1 | 1 |

### host:482905

Chamadas escritas diretamente neste corpo: `Promise.all`, `byHome.handle.close`, `descriptorPathOf`, `entry.isDirectory`, `logins.map`, `logins.push`, `new AggregateError`, `new Map`, `openBelowTarget`, `refusals2.values`, `settle3`.

Alvos de lançamento explícito: `AggregateError`.

SHA-256 do trecho: `24d6823fca531f6c0f9f575ad0e804196479b07e1c7bf8948a18a9c63661f844`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
