# `isAgentStoreArtifactPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/cloud-agent-artifact-plan.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cloud-agent-artifact-plan-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:508228-508230](../../../../../../../reference/runtime/host-main.cjs#L508228-L508230) | `FunctionDeclaration` | não | `absolutePath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508228-508230](../../../../../../../reference/runtime/host-main.cjs#L508228-L508230) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:508228

Chamadas escritas diretamente neste corpo: `absolutePath.startsWith`.

SHA-256 do trecho: `f8e1d978f7b2e781b6e514a8375a35613e3dca0bda733a91d376a32ebd01284f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
