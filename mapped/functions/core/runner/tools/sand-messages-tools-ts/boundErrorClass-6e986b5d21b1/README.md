# `boundErrorClass`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-messages-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778132-778135](../../../../../../../reference/runtime/host-main.cjs#L778132-L778135) | `FunctionDeclaration` | não | `error64` |
| [evaluation:577867-577870](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577867-L577870) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778132-778135](../../../../../../../reference/runtime/host-main.cjs#L778132-L778135) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577867-577870](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577867-L577870) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:778132

Chamadas escritas diretamente neste corpo: `MESSAGES_ERROR_CLASSES.find`, `errorClassOf`.

SHA-256 do trecho: `c13c50b94d11eae34c553b7ef6a13e9302e4c191b15e7de270259a1217251db7`.

### evaluation:577867

Chamadas escritas diretamente neste corpo: `MESSAGES_ERROR_CLASSES.find`, `errorClassOf`.

SHA-256 do trecho: `44e742195b11d92924bcc74d0fb43c598b879720afd5fa6ada7f53ea16dbc72d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
