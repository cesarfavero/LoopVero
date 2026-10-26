# `parseDraftConnectorRecord`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732681-732685](../../../../../../../reference/runtime/host-main.cjs#L732681-L732685) | `FunctionDeclaration` | não | `text3` |
| [evaluation:540203-540207](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540203-L540207) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732681-732685](../../../../../../../reference/runtime/host-main.cjs#L732681-L732685) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:540203-540207](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540203-L540207) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:732681

Chamadas escritas diretamente neste corpo: `Object.entries`, `Object.fromEntries`, `parseDraftConnectorJson`.

SHA-256 do trecho: `79f6df484547e6858410f27016e612d1edddb7c207f3c02d4578bb03ba3c546b`.

### evaluation:540203

Chamadas escritas diretamente neste corpo: `Object.entries`, `Object.fromEntries`, `parseDraftConnectorJson`.

SHA-256 do trecho: `4a77b066efe7bd142c5f0525b3d22304d9db68a50b7adcf2a3d28b81d03d03d9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
