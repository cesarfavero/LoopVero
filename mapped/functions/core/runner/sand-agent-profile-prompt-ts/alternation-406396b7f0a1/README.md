# `alternation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sand-agent-profile-prompt.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-profile-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:717284-717286](../../../../../../reference/runtime/host-main.cjs#L717284-L717286) | `FunctionDeclaration` | não | `markers` |
| [evaluation:529818-529820](../../../../../../reference/runtime/sand-eval-runner.cjs#L529818-L529820) | `FunctionDeclaration` | não | `markers` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717284-717286](../../../../../../reference/runtime/host-main.cjs#L717284-L717286) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:529818-529820](../../../../../../reference/runtime/sand-eval-runner.cjs#L529818-L529820) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:717284

Chamadas escritas diretamente neste corpo: `.join`, `markers.map`.

SHA-256 do trecho: `8f5a40c6bbe20b7cbdbacfecf403bd7d582925c238f3fb4ebea19b78f208b771`.

### evaluation:529818

Chamadas escritas diretamente neste corpo: `.join`, `markers.map`.

SHA-256 do trecho: `ea256517436b5035e7faceb27ef5d04e9b56adec32ab27526fe5bc31e2c81e55`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
