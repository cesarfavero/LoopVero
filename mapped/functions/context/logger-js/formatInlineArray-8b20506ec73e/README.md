# `formatInlineArray`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225568-225590](../../../../../reference/runtime/host-main.cjs#L225568-L225590) | `FunctionDeclaration` | não | `value, options2, colors, depth, seen, path33` |
| [evaluation:2056-2078](../../../../../reference/runtime/sand-eval-runner.cjs#L2056-L2078) | `FunctionDeclaration` | não | `value, options2, colors, depth, seen, path33` |
| [state-worker:21445-21467](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21445-L21467) | `FunctionDeclaration` | não | `value, options, colors, depth, seen, path` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225568-225590](../../../../../reference/runtime/host-main.cjs#L225568-L225590) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:2056-2078](../../../../../reference/runtime/sand-eval-runner.cjs#L2056-L2078) | 4 | 0 | 0 | 4 | 0 | 0 |
| [state-worker:21445-21467](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21445-L21467) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:225568

Chamadas escritas diretamente neste corpo: `.map`, `Math.min`, `colors.dim`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`, `value.slice`.

SHA-256 do trecho: `dd47c4b050487753c5637c4e5ba9e20c49c62eaea6d744b78dfb29c57e90bb08`.

### evaluation:2056

Chamadas escritas diretamente neste corpo: `.map`, `Math.min`, `colors.dim`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`, `value.slice`.

SHA-256 do trecho: `310342c057dba3225aa22f6c4b651d63ad6fdb1abad71e65baf905a569c332c3`.

### state-worker:21445

Chamadas escritas diretamente neste corpo: `.map`, `Math.min`, `colors.dim`, `items.join`, `items.push`, `seen.add`, `seen.delete`, `seen.has`, `value.slice`.

SHA-256 do trecho: `582fa2e6854542ae045f7da53916236267ecae81c1a5b69ed7d50ee4db9622f3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
