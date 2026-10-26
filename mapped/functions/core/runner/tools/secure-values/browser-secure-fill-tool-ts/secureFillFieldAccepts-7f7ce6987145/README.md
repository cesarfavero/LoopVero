# `secureFillFieldAccepts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/secure-values/browser-secure-fill-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/browser-secure-fill-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767145-767147](../../../../../../../../reference/runtime/host-main.cjs#L767145-L767147) | `FunctionDeclaration` | não | `value, target` |
| [evaluation:562664-562666](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562664-L562666) | `FunctionDeclaration` | não | `value, target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767145-767147](../../../../../../../../reference/runtime/host-main.cjs#L767145-L767147) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:562664-562666](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562664-L562666) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:767145

Chamadas escritas diretamente neste corpo: `sandSecureFillCardFieldAccepts`, `sandSecureFillFieldAccepts`.

SHA-256 do trecho: `b45a110d0c007a1afd40c1f7d8c5bc4e8643cd57b1a5ef5a09dc25cafd1efe2e`.

### evaluation:562664

Chamadas escritas diretamente neste corpo: `sandSecureFillCardFieldAccepts`, `sandSecureFillFieldAccepts`.

SHA-256 do trecho: `b45a110d0c007a1afd40c1f7d8c5bc4e8643cd57b1a5ef5a09dc25cafd1efe2e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
