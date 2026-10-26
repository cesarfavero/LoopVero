# `readSandAgentLoopModel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/model-stream/agent-loop-model.ts` · [README do módulo](../../../../../../modules/core/runner/model-stream/agent-loop-model-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700027-700029](../../../../../../../reference/runtime/host-main.cjs#L700027-L700029) | `FunctionDeclaration` | não | `ctx` |
| [evaluation:513783-513785](../../../../../../../reference/runtime/sand-eval-runner.cjs#L513783-L513785) | `FunctionDeclaration` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700027-700029](../../../../../../../reference/runtime/host-main.cjs#L700027-L700029) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513783-513785](../../../../../../../reference/runtime/sand-eval-runner.cjs#L513783-L513785) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:700027

Chamadas escritas diretamente neste corpo: `ctx.get`.

SHA-256 do trecho: `303f48d865244ea870ffb4aab346bb05cc20a3734753c85f808dd72c44843f0a`.

### evaluation:513783

Chamadas escritas diretamente neste corpo: `ctx.get`.

SHA-256 do trecho: `303f48d865244ea870ffb4aab346bb05cc20a3734753c85f808dd72c44843f0a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
