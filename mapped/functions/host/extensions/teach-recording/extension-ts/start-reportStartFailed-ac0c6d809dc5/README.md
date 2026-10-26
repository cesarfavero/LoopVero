# `start/reportStartFailed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729681-729686](../../../../../../../reference/runtime/host-main.cjs#L729681-L729686) | `ArrowFunctionExpression` | não | `{ kind, errorClass, windowIndex, entryPoint }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729681-729686](../../../../../../../reference/runtime/host-main.cjs#L729681-L729686) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:729681 usa retorno implícito de arrow function.

### host:729681

Chamadas escritas diretamente neste corpo: `context2.deps[computed].logs.reportTeachRecordingStartFailed`.

SHA-256 do trecho: `33c4bb63ba45024c9541823b14bbbc0c8cd0e7df851e429ade6208db6a1fb945`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
