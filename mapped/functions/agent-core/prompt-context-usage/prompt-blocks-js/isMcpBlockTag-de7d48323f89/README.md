# `isMcpBlockTag`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-blocks.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-blocks-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476144-476146](../../../../../../reference/runtime/host-main.cjs#L476144-L476146) | `FunctionDeclaration` | não | `tagName2` |
| [evaluation:255454-255456](../../../../../../reference/runtime/sand-eval-runner.cjs#L255454-L255456) | `FunctionDeclaration` | não | `tagName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476144-476146](../../../../../../reference/runtime/host-main.cjs#L476144-L476146) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255454-255456](../../../../../../reference/runtime/sand-eval-runner.cjs#L255454-L255456) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476144

Chamadas escritas diretamente neste corpo: `tagName2.startsWith`.

SHA-256 do trecho: `a6ebdf5ef254133e32fa74ffb7c3551bd61b54f66bcc26854e5d777c378d1f63`.

### evaluation:255454

Chamadas escritas diretamente neste corpo: `tagName.startsWith`.

SHA-256 do trecho: `491aa3ed7836d5f12e15d631c9731220b69cd2bbb8e563530ed8926c1c7b24f8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
