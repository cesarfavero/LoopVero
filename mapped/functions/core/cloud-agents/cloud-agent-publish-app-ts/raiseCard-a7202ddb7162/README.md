# `raiseCard`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-publish-app.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-publish-app-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566945-566957](../../../../../../reference/runtime/sand-eval-runner.cjs#L566945-L566957) | `FunctionDeclaration` | sim | `deps, result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566945-566957](../../../../../../reference/runtime/sand-eval-runner.cjs#L566945-L566957) | 1 | 0 | 1 | 3 | 0 | 1 |

### evaluation:566945

Chamadas escritas diretamente neste corpo: `deps.raisePublishCard`, `errorLogTag`, `process.stderr.write`.

SHA-256 do trecho: `85580f21a9663fa1b79cd8e0707245a529c64fe3a25425c98323a157a2128cc3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
