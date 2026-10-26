# `expirePendingLocalToolPermissionAskEntries`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/pending-card-sweeps.ts` · [README do módulo](../../../../../../modules/host/extensions/session/pending-card-sweeps-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:719494-719496](../../../../../../../reference/runtime/host-main.cjs#L719494-L719496) | `FunctionDeclaration` | não | `db, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719494-719496](../../../../../../../reference/runtime/host-main.cjs#L719494-L719496) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:719494

Chamadas escritas diretamente neste corpo: `expirePendingCardEntries`.

SHA-256 do trecho: `89db5c85911398354b45563b98d4a7f520d31743ef76f4c534fbd343f5624ad3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
