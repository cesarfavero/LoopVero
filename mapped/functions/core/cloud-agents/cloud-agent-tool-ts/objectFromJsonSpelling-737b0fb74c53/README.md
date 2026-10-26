# `objectFromJsonSpelling`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/cloud-agents/cloud-agent-tool.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770187-770197](../../../../../../reference/runtime/host-main.cjs#L770187-L770197) | `FunctionDeclaration` | não | `value` |
| [evaluation:567783-567793](../../../../../../reference/runtime/sand-eval-runner.cjs#L567783-L567793) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770187-770197](../../../../../../reference/runtime/host-main.cjs#L770187-L770197) | 2 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:567783-567793](../../../../../../reference/runtime/sand-eval-runner.cjs#L567783-L567793) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:770187

Chamadas escritas diretamente neste corpo: `JSON.parse`.

SHA-256 do trecho: `90fd44a7735924eff55272ba90215baa0ebe0386cf1a73346b3cc33ee44fe749`.

### evaluation:567783

Chamadas escritas diretamente neste corpo: `JSON.parse`.

SHA-256 do trecho: `00d35d2a770c739ca3eb1722154b57abcd90a1e351de322d8b18bc71d4537943`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
