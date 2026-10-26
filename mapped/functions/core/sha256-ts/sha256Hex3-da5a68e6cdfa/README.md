# `sha256Hex3`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `core/sha256.ts` · [README do módulo](../../../../modules/core/sha256-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536062-536064](../../../../../reference/runtime/sand-eval-runner.cjs#L536062-L536064) | `FunctionDeclaration` | não | `data2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536062-536064](../../../../../reference/runtime/sand-eval-runner.cjs#L536062-L536064) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536062

Chamadas escritas diretamente neste corpo: `.digest`, `.update`.

SHA-256 do trecho: `488cbb536993a600872e5694900b950c47902e779e33113649c79164ab7611e0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
