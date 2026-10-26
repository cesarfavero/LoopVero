# `hasCronTrigger`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/continuation.ts` · [README do módulo](../../../../modules/evaluation/continuation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628673-628675](../../../../../reference/runtime/sand-eval-runner.cjs#L628673-L628675) | `FunctionDeclaration` | não | `spec` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628673-628675](../../../../../reference/runtime/sand-eval-runner.cjs#L628673-L628675) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:628673

Chamadas escritas diretamente neste corpo: `triggerCronSchedules`.

SHA-256 do trecho: `c72028069b8370cf59e43f4f90daebaea00d0495e2d6fcc4838d584a26bb79e5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
