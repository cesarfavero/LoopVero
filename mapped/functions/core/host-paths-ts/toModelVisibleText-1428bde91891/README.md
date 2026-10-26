# `toModelVisibleText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/host-paths.ts` · [README do módulo](../../../../modules/core/host-paths-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:530470-530472](../../../../../reference/runtime/sand-eval-runner.cjs#L530470-L530472) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:530470-530472](../../../../../reference/runtime/sand-eval-runner.cjs#L530470-L530472) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:530470

Chamadas escritas diretamente neste corpo: `text3.replaceAll`.

SHA-256 do trecho: `c7fe380b6ecc7b7aef736eb1517ac2a9305a25541b884583d8fc47fb29f8c1f7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
