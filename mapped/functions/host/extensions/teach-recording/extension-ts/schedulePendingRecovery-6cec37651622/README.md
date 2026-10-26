# `schedulePendingRecovery`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/teach-recording/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/teach-recording/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:729703-729746](../../../../../../../reference/runtime/host-main.cjs#L729703-L729746) | `FunctionDeclaration` | não | `{   recover,   whenReady,   subscribeToRenewal,   signal,   log: log5 }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729703-729746](../../../../../../../reference/runtime/host-main.cjs#L729703-L729746) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:729703

Chamadas escritas diretamente neste corpo: `attempt`, `subscribeToRenewal`.

SHA-256 do trecho: `17962f60e63625478316bb9c6367fb51081bbbe719b2da19090f26d618e3093a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
