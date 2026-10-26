# `isPublishPreviewArtifact`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/cloud-agent-artifact-plan.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cloud-agent-artifact-plan-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:508260-508262](../../../../../../../reference/runtime/host-main.cjs#L508260-L508262) | `FunctionDeclaration` | não | `artifact` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508260-508262](../../../../../../../reference/runtime/host-main.cjs#L508260-L508262) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:508260

Chamadas escritas diretamente neste corpo: `artifact.path.startsWith`.

SHA-256 do trecho: `b6388881f94c1dbbf958858a30bf35b965e2043fa8bf33bcc8da980e60b73786`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
