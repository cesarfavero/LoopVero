# `recoverTriggerModelSentAsJsonEncodedString`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/trigger-schema.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/trigger-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762299-762308](../../../../../../../../reference/runtime/host-main.cjs#L762299-L762308) | `FunctionDeclaration` | não | `value` |
| [evaluation:554909-554918](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554909-L554918) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762299-762308](../../../../../../../../reference/runtime/host-main.cjs#L762299-L762308) | 2 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:554909-554918](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554909-L554918) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:762299

Chamadas escritas diretamente neste corpo: `JSON.parse`, `reportShim`, `stringifiedTrigger.applied`, `trimmed.startsWith`, `value.trim`.

SHA-256 do trecho: `b7d7801c33d6d2b8472c8f2e551e7eb43ac6f4b79d904b4666c8786d89eb5e01`.

### evaluation:554909

Chamadas escritas diretamente neste corpo: `JSON.parse`, `reportShim`, `stringifiedTrigger.applied`, `trimmed.startsWith`, `value.trim`.

SHA-256 do trecho: `b7d7801c33d6d2b8472c8f2e551e7eb43ac6f4b79d904b4666c8786d89eb5e01`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
