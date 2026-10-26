# `requestedTextProbeVerdict`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512502-512518](../../../../../../reference/runtime/sand-eval-runner.cjs#L512502-L512518) | `FunctionDeclaration` | não | `target, reported2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512502-512518](../../../../../../reference/runtime/sand-eval-runner.cjs#L512502-L512518) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:512502

Chamadas escritas diretamente neste corpo: `target.candidates.find`.

SHA-256 do trecho: `b6813abaf106be1f7fabe3f5b4da587b333ffb013566ea218b37b0d63c96ec1e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
