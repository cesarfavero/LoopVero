# `segmentsBelow2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/no-follow-walk.ts` · [README do módulo](../../../../modules/host/no-follow-walk-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:627482-627490](../../../../../reference/runtime/sand-eval-runner.cjs#L627482-L627490) | `FunctionDeclaration` | não | `root, dir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:627482-627490](../../../../../reference/runtime/sand-eval-runner.cjs#L627482-L627490) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:627482

Chamadas escritas diretamente neste corpo: `invariant`, `rel.split`, `rel.startsWith`.

SHA-256 do trecho: `20a9d31eb871142876e5a8c8d7e8136734cd2cba0666250e289b8f6487aa91d4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
