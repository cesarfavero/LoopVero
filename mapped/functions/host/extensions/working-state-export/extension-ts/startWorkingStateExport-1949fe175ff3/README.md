# `startWorkingStateExport`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786058-786170](../../../../../../../reference/runtime/host-main.cjs#L786058-L786170) | `FunctionDeclaration` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786058-786170](../../../../../../../reference/runtime/host-main.cjs#L786058-L786170) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:786058

Chamadas escritas diretamente neste corpo: `.with`, `context2.onStop`, `createContext`, `createDebouncePolicy`, `createIdleWatchdogPolicy`, `new WorkingStateExporter`, `new WorkingStateWarmer`, `subscribeTranscriptMutations`.

SHA-256 do trecho: `007c70a1aa25d52f4d389b2f355340b631ee6280f8bc829adf43204c18282572`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
