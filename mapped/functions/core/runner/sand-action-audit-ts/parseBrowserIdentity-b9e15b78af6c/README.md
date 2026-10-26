# `parseBrowserIdentity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512387-512392](../../../../../../reference/runtime/sand-eval-runner.cjs#L512387-L512392) | `FunctionDeclaration` | não | `stdout` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512387-512392](../../../../../../reference/runtime/sand-eval-runner.cjs#L512387-L512392) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:512387

Chamadas escritas diretamente neste corpo: `BROWSER_VERSION_RE.exec`, `LAUNCHER_LINE_RE.exec`, `boundedInt`.

SHA-256 do trecho: `af71c6e9dc9ec260e977bd4b400a3a82ef89a6889ff9fff520a33f3c091a3efa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
