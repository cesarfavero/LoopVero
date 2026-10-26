# `originUrlsOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:538288-538293](../../../../../../../reference/runtime/host-main.cjs#L538288-L538293) | `FunctionDeclaration` | não | `backend` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538288-538293](../../../../../../../reference/runtime/host-main.cjs#L538288-L538293) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:538288

Chamadas escritas diretamente neste corpo: `new URL`, `originGitHostFromBackendUrl`, `parsedApi.toString`.

SHA-256 do trecho: `1078a07c30640c450e64131b477d75d209abce8c158297cff5578245d5e1f4ad`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
