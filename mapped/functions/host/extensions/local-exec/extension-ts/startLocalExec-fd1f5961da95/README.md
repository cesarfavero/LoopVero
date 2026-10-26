# `startLocalExec`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/local-exec/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/local-exec/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:682173-682187](../../../../../../../reference/runtime/host-main.cjs#L682173-L682187) | `FunctionDeclaration` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682173-682187](../../../../../../../reference/runtime/host-main.cjs#L682173-L682187) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682173

Chamadas escritas diretamente neste corpo: `new SandLocalExecBridge`.

SHA-256 do trecho: `8752ec9e7f625ab42cecf9dd6813ee8b0249f1844cf9d9117fbe830e575c6c60`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
