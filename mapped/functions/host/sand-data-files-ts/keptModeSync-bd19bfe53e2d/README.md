# `keptModeSync`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-data-files.ts` · [README do módulo](../../../../modules/host/sand-data-files-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454060-454062](../../../../../reference/runtime/host-main.cjs#L454060-L454062) | `FunctionDeclaration` | não | `path33` |
| [evaluation:627652-627654](../../../../../reference/runtime/sand-eval-runner.cjs#L627652-L627654) | `FunctionDeclaration` | não | `path33` |
| [state-worker:653-655](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L653-L655) | `FunctionDeclaration` | não | `path` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454060-454062](../../../../../reference/runtime/host-main.cjs#L454060-L454062) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627652-627654](../../../../../reference/runtime/sand-eval-runner.cjs#L627652-L627654) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:653-655](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L653-L655) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:454060

Chamadas escritas diretamente neste corpo: `keptModeOf`.

SHA-256 do trecho: `657552db1c2b9f0e2ca2af2d2c76c67b65cbc7a610472273dc2a5d1f383c7ebe`.

### evaluation:627652

Chamadas escritas diretamente neste corpo: `keptModeOf`.

SHA-256 do trecho: `9c5383b77557ae7b9f889a791571ffdca357f21a22b2fbdf19f74dd215c35532`.

### state-worker:653

Chamadas escritas diretamente neste corpo: `keptModeOf`.

SHA-256 do trecho: `556414feacfd75f169fc2162581c61857dccaf2195ef4accf74ed17f6324e562`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
