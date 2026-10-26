# `readProjectMembership`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/cloud-agent-info-read.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cloud-agent-info-read-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:508431-508446](../../../../../../../reference/runtime/host-main.cjs#L508431-L508446) | `FunctionDeclaration` | sim | `client, bcId, composer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508431-508446](../../../../../../../reference/runtime/host-main.cjs#L508431-L508446) | 1 | 0 | 1 | 3 | 0 | 1 |

### host:508431

Chamadas escritas diretamente neste corpo: `classifyReadFailure`, `client.listWorkersForManager`, `memberships.filter`, `new ListWorkersForManagerRequest`, `resolveProjectMembership`.

SHA-256 do trecho: `1a8b729fae320a7a75ed39c50169ba4c4e2f105b670556104e1f9ac0f1f24e5a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
