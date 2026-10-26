# `sniffAvatarMimeType`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/agents/agent-avatar-format.ts` · [README do módulo](../../../../../modules/core/agents/agent-avatar-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494481-494498](../../../../../../reference/runtime/host-main.cjs#L494481-L494498) | `FunctionDeclaration` | não | `bytes` |
| [evaluation:543642-543659](../../../../../../reference/runtime/sand-eval-runner.cjs#L543642-L543659) | `FunctionDeclaration` | não | `bytes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494481-494498](../../../../../../reference/runtime/host-main.cjs#L494481-L494498) | 6 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:543642-543659](../../../../../../reference/runtime/sand-eval-runner.cjs#L543642-L543659) | 6 | 0 | 0 | 6 | 0 | 0 |

### host:494481

Chamadas escritas diretamente neste corpo: `.replace`, `.toLowerCase`, `.trimStart`, `Math.min`, `bytes.toString`, `head.includes`, `head.startsWith`.

SHA-256 do trecho: `733277102ec5fb7bd65da448e431309c846e135ee14634d3993c3419cc3635fe`.

### evaluation:543642

Chamadas escritas diretamente neste corpo: `.replace`, `.toLowerCase`, `.trimStart`, `Math.min`, `bytes.toString`, `head.includes`, `head.startsWith`.

SHA-256 do trecho: `733277102ec5fb7bd65da448e431309c846e135ee14634d3993c3419cc3635fe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
