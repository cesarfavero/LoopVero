# `authorizeSecureFillDomain`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/secure-values/browser-secure-fill-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/browser-secure-fill-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767142-767144](../../../../../../../../reference/runtime/host-main.cjs#L767142-L767144) | `FunctionDeclaration` | não | `value, target, anySite` |
| [evaluation:562661-562663](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562661-L562663) | `FunctionDeclaration` | não | `value, target, anySite` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767142-767144](../../../../../../../../reference/runtime/host-main.cjs#L767142-L767144) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:562661-562663](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562661-L562663) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:767142

Chamadas escritas diretamente neste corpo: `authorizeSandSecureFillCardDomain`, `authorizeSandSecureFillDomain`.

SHA-256 do trecho: `cc8db361730d8dd521830a7c101c0404d625bdf6c4dd79c116fe5c77341d0b6c`.

### evaluation:562661

Chamadas escritas diretamente neste corpo: `authorizeSandSecureFillCardDomain`, `authorizeSandSecureFillDomain`.

SHA-256 do trecho: `cc8db361730d8dd521830a7c101c0404d625bdf6c4dd79c116fe5c77341d0b6c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
