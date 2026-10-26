# `jsx`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `prompt-jsx/jsx-runtime.js` · [README do módulo](../../../../modules/prompt-jsx/jsx-runtime-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:628938-628950](../../../../../reference/runtime/host-main.cjs#L628938-L628950) | `FunctionDeclaration` | não | `type2, props, ...children` |
| [evaluation:317955-317967](../../../../../reference/runtime/sand-eval-runner.cjs#L317955-L317967) | `FunctionDeclaration` | não | `type2, props, ...children` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:628938-628950](../../../../../reference/runtime/host-main.cjs#L628938-L628950) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:317955-317967](../../../../../reference/runtime/sand-eval-runner.cjs#L317955-L317967) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:628938

Chamadas escritas diretamente neste corpo: `Array.isArray`, `allChildren.filter`.

SHA-256 do trecho: `3941683b231e33ac1c3dc8f992ebbe6312d89fcec689d0beb2fa67a2fcf45c7e`.

### evaluation:317955

Chamadas escritas diretamente neste corpo: `Array.isArray`, `allChildren.filter`.

SHA-256 do trecho: `3941683b231e33ac1c3dc8f992ebbe6312d89fcec689d0beb2fa67a2fcf45c7e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
