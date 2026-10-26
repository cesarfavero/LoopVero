# `parseDraftConnectorJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732662-732668](../../../../../../../reference/runtime/host-main.cjs#L732662-L732668) | `FunctionDeclaration` | não | `text3` |
| [evaluation:540184-540190](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540184-L540190) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732662-732668](../../../../../../../reference/runtime/host-main.cjs#L732662-L732668) | 0 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:540184-540190](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540184-L540190) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:732662

Chamadas escritas diretamente neste corpo: `JSON.parse`.

SHA-256 do trecho: `852cf2772bdd57d147ed5ee01e162650623f987393dd6d19457d2f7493560ba2`.

### evaluation:540184

Chamadas escritas diretamente neste corpo: `JSON.parse`.

SHA-256 do trecho: `852cf2772bdd57d147ed5ee01e162650623f987393dd6d19457d2f7493560ba2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
