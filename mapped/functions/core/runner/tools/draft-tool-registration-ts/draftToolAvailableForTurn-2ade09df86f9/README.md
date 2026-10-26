# `draftToolAvailableForTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-tool-registration.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756011-756013](../../../../../../../reference/runtime/host-main.cjs#L756011-L756013) | `FunctionDeclaration` | não | `host, decisions` |
| [evaluation:541886-541888](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541886-L541888) | `FunctionDeclaration` | não | `host, decisions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756011-756013](../../../../../../../reference/runtime/host-main.cjs#L756011-L756013) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541886-541888](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541886-L541888) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:756011

Chamadas escritas diretamente neste corpo: `decisions.offers`, `host.gates.draftExternalMessage`.

SHA-256 do trecho: `07999290631fbbd2f1f8d8e671f2abec5be732cf1341b2ef83db47d5338246bf`.

### evaluation:541886

Chamadas escritas diretamente neste corpo: `decisions.offers`, `host.gates.draftExternalMessage`.

SHA-256 do trecho: `07999290631fbbd2f1f8d8e671f2abec5be732cf1341b2ef83db47d5338246bf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
